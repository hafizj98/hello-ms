pipeline {
    agent any

    stages {
        stage('Checkout Repository') {
            steps {
                checkout scm
            }
        }

        steps {
            script {
                def gitUrl = sh(script: 'git config --get remote.origin.url', returnStdout: true).trim()
                echo "Git remote origin URL: ${gitUrl}"
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
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
                    sh 'docker push hafizjamil/ms:latest'
                }
            }
        }

        stage('Update Kubernetes Manifests') {
            steps {
                sh 'git checkout master'
                sh 'sed -i "s/hafizjamil/ms:old-tag/hafizjamil/ms:latest/g" manifest/deployment.yaml'
                sh 'git add manifest/deployment.yaml'
                sh 'git commit -m "Update image tag to latest"'
                sh 'git push origin master'
            }
        }
    }

    post {
        failure {
            echo 'Pipeline failed. Please check the logs for more details.'
        }
    }
}