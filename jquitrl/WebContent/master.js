/**
 * Include the widgetfactory.js and call OnLoad()
 */

$(document).ready(
		function() {
			"use strict";
			$("#hidethereminder").click(function() {
				$("#reminder").hide();
				$("#hidethereminder").hide();

				$("#labelLoadedOn").html(GetNowDateString());

			});

			$("#reload").click(function() {
				window.location.reload();

				$("#labelLoadedOn").html(GetNowDateString());

			});

			function GetNowDateString() {
				var currentdate = new Date();
				var datetime = "Last Updated: " + currentdate.getDate() + "/"
						+ (currentdate.getMonth() +1) + "/"
						+ currentdate.getFullYear() + " @ "
						+ currentdate.getHours() + ":"
						+ currentdate.getMinutes() + ":"
						+ currentdate.getSeconds();

				return datetime;
			}

			/*
			 * $("#reloadinfive").click(function () {setTimeout(function () {
			 * window.location.reload(); //alert("reloadinfive");
			 * $("#info").html("new label at 8:57 AM"); }, 5000);
			 * 
			 * });
			 */
		});
