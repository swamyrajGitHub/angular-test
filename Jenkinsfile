node {


    //check out happens from jenkins default
    stage('Checkout') {
        //disable to recycle workspace data to save time/bandwidth
        //deleteDir()
        checkout scm

        //enable for commit id in build number
        //env.git_commit_id = sh returnStdout: true, script: 'git rev-parse HEAD'
        //env.git_commit_id_short = env.git_commit_id.take(7)
        //currentBuild.displayName = "#${currentBuild.number}-${env.git_commit_id_short}"
   // }

    stage('NPM Install') {
        withEnv(["NPM_CONFIG_LOGLEVEL=warn"]) {
            bat 'npm install'
        }
    }

    stage('Test') {
       
          bat 'ng test --progress=true --watch false'
        
    }

    /**stage('Lint') {
        bat 'ng lint'
    }**/

    stage('Build') {
        milestone()
        bat 'ng build --prod'
    }

    
}
