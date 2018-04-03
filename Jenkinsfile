pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'docker build -f Dockerfile -t morsisdivine:alejandroapi .'
        sh 'docker run --rm -it -p 80:3001  -d morsisdivine:alejandroapi'
        sh 'curl http://localhost:80/'
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
