pipeline {
    agent any

    stages {
        stage('Checkout Repository') {
            steps {
                checkout scm
                script {
                    def gitUrl = sh(script: 'git config --get remote.origin.url', returnStdout: true).trim()
                    echo "Git remote origin URL: ${gitUrl}"
                }
            }
        }

        stage('Test') {
            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t hafizjamil/ms:latest .'
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DOCKER_USERNAME
