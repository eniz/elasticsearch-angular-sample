var elasticSearchApp = angular.module('ElasticSampleApp', ['elasticsearch']);

elasticSearchApp.service('client', function (esFactory) {
    return esFactory({
     host: 'localhost:9200',
     apiVersion: '1.2',
     log: 'trace'
    });
});

elasticSearchApp.controller('AppController', function ($scope, client, esFactory){
    client.cluster.state({
       metric: [
           'cluster_name',
           'nodes',
           'master_node',
           'version'
       ]
    })
    .then(function(resp){
        $scope.clusterState = resp;
        $scope.error = null;
    })
    .catch(function (err) {
        $scope.clusterState = null;
        $scope.error = err;

        // No connections error
        if (err instanceof esFactory.errors.NoConnections) {
            $scope.error = new Error('Unable to connect to elasticsearch. ' +
            'Make sure that it is running and listening at http://localhost:9200');
        }
    });
});