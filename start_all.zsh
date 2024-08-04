PJ_DIR=$(cd `dirname $0` && pwd)

# Express
cd $PJ_DIR/Portal-inf-usm-backend
bash entrypoint.sh &> $PJ_DIR/Logs/express.ansi &

# Astro
cd $PJ_DIR/Portal-inf-usm
nohup bash entrypoint.sh &> $PJ_DIR/Logs/astro.ansi &