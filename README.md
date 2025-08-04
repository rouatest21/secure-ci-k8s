<<<<<<< HEAD
# secure-ci-k8s
=======
# Secure CI‑K8s

Ce projet déploie une API sécurisée (JWT + Express), CI/CD via GitHub Actions, et monitoring avec Prometheus & Grafana sur K3s via Traefik.

## ✅ Prérequis

- 2 VMs : dev (Docker, GitHub CLI, kubectl) + k3s
- Domaine DNS `/etc/hosts` : api.secure.local, grafana.secure.local pointant sur IP MetalLB
- Secrets GitHub :
  - `DOCKER_USER`
  - `DOCKER_PASS`
  - `KUBECONFIG_B64` (kubeconfig encodé base64)
  - `JWT_SECRET`
  - `grafana_admin_password`

## 🚀 Déploiement

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <ton‑repo‑URL>
git push -u origin main
>>>>>>> df25948 (Initial commit)
