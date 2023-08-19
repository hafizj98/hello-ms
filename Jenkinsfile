pipeline {
    agent any

    stages {
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
}
