pipeline {
  options {
    buildDiscarder(logRotator(numToKeepStr: '5', artifactNumToKeepStr: '5'))
  }
  agent {label 'mac'}
  stages {
    stage('Build') {
      steps {
        sh '''git clone https://github.com/ale-sanchez-g/alejandroAPI.git && wait
        cd alejandroAPI/app
        git checkout test/oceanblue
        npm install
        PORT=3001 nohup npm start >> app.log 2>&1 &
        sleep 5
        curl localhost:3001/words
        cd ~
        '''
      }
    }
    stage('Run test in parallel') {
      steps{
        parallel(
          ('Call the API service'): {
            sh '''response=$(curl -sb -H "Accept: application/json" "http://guarded-scrubland-78590.herokuapp.com/")
            echo $response
            '''        },
          ('Get a API service response to Path'): {
            sh '''response=$(curl -sb -H "Accept: application/json" "http://guarded-scrubland-78590.herokuapp.com/words")
            echo $response
            '''
          },
          ('Construct my own password'): {
            sh '''response=$(curl -sb -H "Accept: application/json" "http://guarded-scrubland-78590.herokuapp.com/api/password?number=5&language=palabras&special=true")
            echo $response
            '''
          },
          ('get API help'): {
            sh '''response=$(curl -sb -H "Accept: application/json" "http://guarded-scrubland-78590.herokuapp.com/api")
            echo $response
            '''
          }
        )
      }
    }
    stage('Deployed to UAT') {
      steps{
        sh 'echo completed'
      }
    }
    stage('Run test Integration') {
      steps{
        parallel(
          ("Integration test wit forest"):{
            sh '''response=$(curl -sb -H "Accept: application/json" "https://mysterious-forest-66057.herokuapp.com/password/english")
              echo $response
            '''
          },
          ("Newman test from remote collection"):{
            sh ''' npm install newman -g
            newman run https://raw.githubusercontent.com/asanchezgiraldo/postman-collections/master/Qantas%20API%20challenge.postman_collection.json -r junit
            '''
            junit 'newman/*.xml'
          }
        )
      }
    }
    stage('Deployed to STG') {
      steps{
        sh 'echo completed'
      }
    }
  }
}
