PJ_DIR=$(cd `dirname $0` && pwd)

# Astro
cd $PJ_DIR/Portal-inf-usm && bash entrypoint.sh

# Express
cd $PJ_DIR/Portal-inf-usm-backend && bash entrypoint.sh