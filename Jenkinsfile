pipeline {
  options {
    buildDiscarder(logRotator(numToKeepStr: '5', artifactNumToKeepStr: '5'))
  }
  agent {label 'mac'}
  stages {
    stage('Build') {
      steps {
        sh 'echo build'
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
        sh '''response=$(curl -sb -H "Accept: application/json" "https://mysterious-forest-66057.herokuapp.com/password/english")
            echo $response
        '''
        sh 'newman run Qantas_API_challenge.postman_collection.json'
      }
    }
    stage('Deployed to STG') {
      steps{
        sh 'echo completed'
      }
    }
  }
}
