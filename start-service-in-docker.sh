# This script is executed from docker-compose.prod.yml, don't try to run this directly.

# Copy all the source files to a new location in the image.
# This makes e.g. npm install much faster than trying to run
# directly on the host location, especially on Windows.
cp -r /app /app-run
cd /app-run
echo "Starting install"
npm ci --no-audit
echo "Starting web server"
npm start
