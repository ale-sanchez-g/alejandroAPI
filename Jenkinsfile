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
          sh'''#!/bin/bash -xe
            curl https://guarded-scrubland-78590.herokuapp.com/
          '''
        },
        ('Get a API service response to Path'): {
          sh'''#!/bin/bash -xe
            curl https://guarded-scrubland-78590.herokuapp.com/words
          '''        
        },
        ('Construct my own password'): {
          sh'''#!/bin/bash -xe
            curl https://guarded-scrubland-78590.herokuapp.com/api/password?number=5&language=palabras&special=true
          '''
        }          
        )
      }
    }
  }
}
