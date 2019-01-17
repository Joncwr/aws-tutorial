module.exports = {
  apps: [{
    name: 'aws-tutorial',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-191-129-57.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/tutoria.pem',
      ref: 'origin/master',
      repo: 'git@github.com:Joncwr/aws-tutorial.git',
      path: '/home/ubuntu/aws-tutorial',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
