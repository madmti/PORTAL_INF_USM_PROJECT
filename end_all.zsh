# Astro
LINE=($(ps -efa | grep astro | grep dev))
kill -9 ${LINE[1]}

# Express
LINE=($(ps -efa | grep bun | grep server.ts))
kill -9 ${LINE[1]}