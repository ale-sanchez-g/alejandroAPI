pipeline {
  options {
    buildDiscarder(logRotator(numToKeepStr: '5', artifactNumToKeepStr: '5'))
  }
    agent {
      docker {
        image 'node:6-alpine'
        args '-p 3000:3000'
    }
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
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
  }
}
