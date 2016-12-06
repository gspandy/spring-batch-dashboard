DashboardApp.Collections.JobCollection = Backbone.PageableCollection.extend({
    model: DashboardApp.Models.JobModel,

    url: "api/jobs",

    state: {
        pageSize: 15
    },

    mode: "client",

    initialize: function (options) {
    },

    parse: function (response) {
        return response._embedded.jobs;
    }
});