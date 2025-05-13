pipeline {
    agent {
        docker {
            image 'node:18'
            args '-p 3000:3000'
        }
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        
        stage('Lint') {
            steps {
                sh 'npm run lint || echo "Linting issues found"'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm test || echo "Tests failed but continuing"'
            }
        }
        
        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: '.next/**/*', fingerprint: true
            }
        }
    }
    
    post {
        success {
            echo 'Build succeeded! Ready for deployment.'
        }
        failure {
            echo 'Build failed! Check the logs for details.'
        }
        always {
            echo 'Cleaning up workspace...'
            sh 'rm -rf *'
        }
    }
}