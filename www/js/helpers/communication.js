(function() {
	window.App = window.App || {};
	App.communication = App.communication || {};

	App.communication = {
		POST : function(options) {
			var url = options.url,
				data = options.data || {},
				dataType = options.dataType || 'json',
				success = options.success || function() {},
				error = options.error || function() {};
	
			$.ajax({
				url : App.settings.server + url,
				type : 'POST',
				data : data,
				success : function(response) {
					if(response.result) {
						success(response);
					} else {
						error(response);
					}
				},
				error : function(response) {
					error(response);
				}
			});
		},

		GET : function(options) {
			var url = options.url,
				data = options.data || {},
				dataType = options.dataType || 'json',
				success = options.success || function() {},
				error = options.error || function() {};
	
			var req = $.ajax({
				url : App.settings.server + url,
				type : 'GET',
				data : data,
				dataType : 'json',
				success : function(response) {
					success(response);
				},
				error : function(response) {
					error(response);
				}
			});
		},

		PUT : function(options) {
			var url = options.url,
				data = options.data || {},
				dataType = options.dataType || 'json',
				success = options.success || function() {},
				error = options.error ||function() {};

			data._method = 'put';
			$.ajax({
				url : App.settings.server + url,
				type : 'POST',
				data : data,
				dataType : dataType,
				success : function(response) {
					if(response.result) {
						success(response);
					} else {
						error(response);
					}
				},
				error : function(response) {
					error(response);
				}
			});
		},

		DELETE : function(options) {
			var url = options.url,
				data = options.data || {},
				dataType = options.dataType || 'json',
				success = options.success || function() {},
				error = options.error || function() {};

			data._method = 'delete';
			$.ajax({
				url : App.settings.server + url,
				type : 'POST',
				data : data,
				dataType : dataType,
				success : function(response) {
					if(response.result) {
						success(response);
					} else {
						error(response);
					}
				},
				error : function(response) {
					error(response);
				}
			});
		},
	}
})();