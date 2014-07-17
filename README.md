# Angular + Elasticsearch Example

This is an example project to show how you can use elasticsearch.js with angular.

## Prerequisites

In order to run this example, you will need to have the following installed
  1. [elasticsearch](http://www.elasticsearch.org/guide/en/elasticsearch/guide/current/_installing_elasticsearch.html)
  2. [bower](http://bower.io/#install-bower)

## To run the example:

1. Clone this repo locally (or just download and unzip it)

  ```sh
  git clone https://github.com/enzglk/elasticsearch-angular-sample.git
  ```

2. Move into the project

  ```sh
  cd elasticsearch-angular-sample
  ```

3. Install the bower dependencies

  ```sh
  bower install
  ```

4. Open the index.html file in your browser.

## Some Notes

1. Restful Interface 

  ```sh
  curl -XGET 'http://localhost:9200/'
  ```
  
2. Create Index

  ```sh
  curl -XPUT 'http://localhost:9200/test_index'
  ```
  
3. Index a document

  ```sh
  curl -XPUT 'http://localhost:9200/test_index/test/' -d @testdata.json
  ```
  
4. Cluster Status

  ```sh
  curl -XGET 'http://localhost:9200/_status'
  ```
  
5. Delete Index

  ```sh
  curl -XDELETE 'http://localhost:9200/test_index'
  ```
  
  