cp index.html timestamp-static/public
cp assets -R timestamp-static/public
git add -A
git commit -m "更新"
git push heroku master