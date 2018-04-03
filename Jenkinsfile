pipeline {
  options {
    buildDiscarder(logRotator(numToKeepStr: '5', artifactNumToKeepStr: '5'))
  }
  agent any
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
          sh 'echo test 1'
        },
        ('Get a API service response to Path'): {
          sh 'echo test 2'       
        },
        ('Construct my own password'): {
          sh 'curl google.com'
        }          
        )
      }
    }
  }
}
