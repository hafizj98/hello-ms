node {
    stage('Checkout') {
        checkout scm
    }
    
    stage('Configure Git') {
        sh 'git config --global --add safe.directory "*"'
    }
    
    stage('Build') {
        sh 'echo "Building the project..."'
        // Add your build commands here
    }
    
    stage('Test') {
        sh 'echo "Running tests..."'
        // Add your test commands here
    }
    
    stage('Deploy') {
        sh 'echo "Deploying the project..."'
        // Add your deploy commands here
    }
}