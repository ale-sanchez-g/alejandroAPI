pipeline {
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
          sh 'curl https://guarded-scrubland-78590.herokuapp.com/'
        },
        ('Get a API service response to Path'): {
          sh 'curl https://guarded-scrubland-78590.herokuapp.com/words'
        },
        ('Construct my own password'): {
          sh 'curl https://guarded-scrubland-78590.herokuapp.com/api/password?number=5&language=palabras&special=true'
        }          
        )
      }
    }
  }
}
