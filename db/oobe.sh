#!/bin/bash
##Ubuntu Server 20.04 Custom OOBE Script
##Version 0.1.2 Build 20240627
##WMProject1217 Studios 2024
if [ "$(id -u)" -ne 0 ]; then
    echo "script request sudo or run by root"
    exit 1
fi

#stop, disable and remove cloud-init
touch /etc/cloud/cloud-init.disabled
systemctl stop cloud-init-local cloud-init cloud-config cloud-final
systemctl disable cloud-init-local cloud-init cloud-config cloud-final
apt purge cloud-init -y
rm -rf /etc/cloud && rm -rf /var/lib/cloud/

#remove snap packages, remove snap and disable reinstall snap
for p in $(snap list | awk '{print $1}'); do
  snap remove $p
done
systemctl stop snapd
systemctl disable --now snapd.socket
for m in /snap/core/*; do
   umount $m
done
apt autoremove --purge snapd -y
rm -rf ~/snap
rm -rf /snap
rm -rf /var/snap
rm -rf /var/lib/snapd
rm -rf /var/cache/snapd
sh -c "cat > /etc/apt/preferences.d/no-snapd.pref" << EOL
Package: snapd
Pin: release a=*
Pin-Priority: -10
EOL

#stop auto update services and disable them
systemctl stop apt-daily.timer apt-daily.service apt-daily-upgrade.timer apt-daily-upgrade.service
systemctl disable apt-daily.service apt-daily-upgrade.service
systemctl mask apt-daily.service apt-daily-upgrade.service
systemctl disable apt-daily.timer apt-daily-upgrade.timer
systemctl daemon-reload
systemctl stop unattended-upgrades.service
systemctl mask unattended-upgrades.service
systemctl daemon-reload

##avoid system blocking when booting
sed -i '/^\[Service\]/a TimeoutStartSec=5sec' /etc/systemd/system/network-online.target.wants/systemd-networkd-wait-online.service

echo "Done."