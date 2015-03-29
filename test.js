var xray = require('x-ray');

xray('http://github.com/stars/matthewmueller')
  .select([{
    $root: '.repo-list-item',
    title: '.repo-list-name',
    link: '.repo-list-name a[href]',
    description: '.repo-list-description',
    meta: {
      $root: '.repo-list-meta',
      starredOn: 'time'
    }
  }])
  .paginate('.pagination a:last-child[href]')
  .limit(10)
  .write('out.json');