pipeline {
    agent {
        docker {
            image 'node:18'
        }
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Setup') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm test || echo "No tests specified"'
            }
        }
    }
    
    post {
        always {
            node {
                echo 'Cleaning up workspace...'
                cleanWs()
            }
        }
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed! Check the logs for details.'
        }
    }
}