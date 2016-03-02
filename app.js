'use strict';

angular.module('OctocardLanding', ['ngMaterial'])
  .controller('MainCtrl', ['$mdSidenav', function($mdSidenav) {
    var self = this;
    this.message = "The OctoCard!";
    this.octocat = "./images/octocat.jpeg";
    this.about = "The Octocard is an amazing tool for any OpenSource connoisseur. It allows you to search through any open source project on Github and view the leading contributors. It also allows you to search for yourself by Github username and see a report card of you open source activity.";
    this.future = "In the future the Octocard will also be able to recommend open source organizations and repositories for you to begin contributing to based on your level of current contributions as well as your languages of choice.";
    this.datAss = "https://github.com/octocard/dat-ass";
    this.client = "https://github.com/octocard/client";
    this.getDatAss = function() {
      return window.open(self.datAss, '_blank');
    };
    this.getClient = function() {
      return window.open(self.client, '_blank');
    }
  }])
