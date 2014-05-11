//create dates

var oTable = "";
var cal = "";
var cal_end = "";
var start_date_obj = new Date();
var start_date = start_date_obj.toDateString();
var next_date = new Date();
var next_date_obj = new Date(next_date.setDate(
    next_date.getDate() + 6
));
var end_date = next_date_obj.toDateString();
var today_start_date = start_date;
var today_end_date = end_date;

/*
String.prototype.trunc = function (n){
    var toLong = this.length>n;
    var s_ = toLong ? this.substr(0,n-1) : this;
    s_ = s_.substr(0,s_.lastIndexOf(' '));
    return toLong ? s_  + '...' : s_;
}
*/

/*
var calendars = [
		{ id: "newg", name: "New Economy Working Group"},
		{ id: "pp", name: "Planned Parenthood"},
		{ id: "ps", name: "Pittsburgh Sports"},
		{ id: "sf", name: "Slow Food"},
		{ id: "fnb", name: "Food Not Bombs"},
		{ id: "bi", name: "Big Idea Coffee Shop"},
		{ id: "tmc", name: "Thomas Merton Center"}
];


var events = [
	{ id: "pp", event_start: "March 29, 2014", date_length: "1", event_name: "Gar Conference" , event_details : "4/3 10am to 4pm", status: "pub"},
	{id: "pp", event_start: "April 14, 2014", date_length: "1", event_name: "Gar Conference" , event_details : "4/3 10am to 4pm", status: "pub"},
	{ id: "ps", event_start: "April 5, 2014", date_length: "2", event_name: "Pittsburgh Pirates Game" , event_details: "Pirates @Home 2pm to 4pm", status: "pub"},
	{ id: "ps", event_start: "April 9, 2014", date_length: "2", event_name: "Pittsburgh Pirates Game" , event_details: "Pirates @Home 2pm to 4pm", status: "pub"},
	{ id: "ps", event_start: "April 17, 2014", date_length: "2", event_name: "Pittsburgh Pirates Game" , event_details: "Pirates @Home 2pm to 4pm", status: "pub"},
	{ id: "bi", event_start: "May 3, 2014", date_length: "7", event_name: "Coffee Bonanza" , event_details: "Drink, Eat, Enjoy", status: "tent"},
	{ id: "pca", event_start: "April 15, 2014", date_length: "2", event_name: "Coffee Bonanza" , event_details: "Drink, Eat, Enjoy", status: "pub"},
	{ id: "pca", event_start: "April 22, 2014", date_length: "2", event_name: "Coffee Update" , event_details: "Drink, Eat, Enjoy", status: "pub"}
];
*/

var calendars = [
		{ id: "newg", name: "New Economy Working Group"},
		{ id: "pp", name: "Planned Parenthood"},
		{ id: "ps", name: "Pittsburgh Sports"},
		{ id: "bi", name: "Big Idea Coffee Shop"},
		{ id: "tmc", name: "Thomas Merton Center"}
];



var events = [
	{ id: "newg", event_start: "May 17, 2014", date_length: "1", event_name: "Fossil Fool Concert", event_details: "Impromptu street performance at Frick Park", status: "pub"},
	{ id: "newg", event_start: "July 16, 2014", date_length: "1", event_name: "Peer-to-Peer Meetup", event_details: "Promoting peer to peer services", status: "tent"},
	{ id: "pp", event_start: "May 23, 2014", date_length: "1", event_name: "Spring Gala Fundraiser", event_details: "Annual fundraising event to support the upcoming year of Planned Parenthood educational programming", status: "tent"},
	{ id: "pp", event_start: "May 30, 2014", date_length: "1", event_name: "Spring Gala Fundraiser", event_details: "Annual fundraising event to support the upcoming year of Planned Parenthood educational programming", status: "tent"},
	 {id: "pp", event_start: "May 16, 2014", date_length: "1", event_name: "Equal Pay Rally", event_details: "Walk from Shadyside to Downtown in support of equal pay for women", status: "tent"},
	 {id: "pp", event_start: "May 3, 2014", date_length: "1", event_name: "Equal Pay Rally Planning session", event_details: "6pm to 8pm", status: "pub"},
	{ id: "ps", event_start: "April 30, 2014", date_length: "1", event_name: "Pittsburgh Pirates Game" , event_details: "Pirates @Home 2pm to 5pm", status: "pub"},
	{ id: "ps", event_start: "May 3, 2014", date_length: "1", event_name: "Pittsburgh Pirates Game" , event_details: "Pirates @Home 7pm to 10pm", status: "pub"},
	{ id: "ps", event_start: "May 4, 2014", date_length: "1", event_name: "Pittsburgh Pirates Game" , event_details: "Pirates @Home 7pm to 10pm", status: "pub"},
	{ id: "ps", event_start: "May 5, 2014", date_length: "1", event_name: "Pittsburgh Pirates Game" , event_details: "Pirates @Home 7pm to 10pm", status: "pub"},
	{ id: "ps", event_start: "May 14, 2014", date_length: "1", event_name: "Pittsburgh Pirates Game" , event_details: "Pirates @Home 7pm to 10pm", status: "pub"},
	{ id: "ps", event_start: "May 15, 2014", date_length: "1", event_name: "Pittsburgh Pirates Game" , event_details: "Pirates @Home 7pm to 10pm", status: "pub"},
	{ id: "ps", event_start: "May 16, 2014", date_length: "1", event_name: "Pittsburgh Pirates Game" , event_details: "Pirates @Home 7pm to 10pm", status: "pub"},
	{ id: "ps", event_start: "May 23, 2014", date_length: "1", event_name: "Pittsburgh Pirates Game" , event_details: "Pirates @Home 7pm to 10pm", status: "pub"},
	{ id: "ps", event_start: "May 24, 2014", date_length: "1", event_name: "Pittsburgh Pirates Game" , event_details: "Pirates @Home 7pm to 10pm", status: "pub"},
	{ id: "ps", event_start: "May 25, 2014", date_length: "1", event_name: "Pittsburgh Pirates Game" , event_details: "Pirates @Home 7pm to 10pm", status: "pub"},	
	{ id: "ps", event_start: "May 17, 2014", date_length: "1", event_name: "Pittsburgh Penguins Game" , event_details: "Penguins Playoffs @Home 7pm to 10pm", status: "pub"},
	{ id: "bi", event_start: "May 13, 2014", date_length: "1", event_name: "Women in Prison Defense Committee Meeting" , event_details: "Come write letters to our congressmen on behalf of women in prison", status: "tent"},
	{ id: "bi", event_start: "May 17, 2014", date_length: "1", event_name: "Vegan Book Club", event_details: "Drink, Eat, Enjoy", status: "pub"},
	{ id: "bi", event_start: "May 21, 2014", date_length: "1", event_name: "Feminist Men's Group" , event_details: "Drink, Eat, Enjoy", status: "pub"},
	{ id: "bi", event_start: "May 27, 2014", date_length: "1", event_name: "Collective Consciousness Connection", event_details: "Come meet and talk about the collective consciousness with kindred spirits", status: "tent"},
	{ id: "bi", event_start: "June 4, 2014", date_length: "1", event_name: "Women in Prison Defense Committee Meeting" , event_details: "Come write letters to our congressmen on behalf of women in prison", status: "tent"},
	{ id: "cith", event_start: "June 6, 2014", date_length: "1", event_name: "Urban Chicken Coop Tour", event_details: "4th Annual Chicks in the Hood Pittsburgh. Proceeds to benefit the Animal Rescue League", status: "tent"},
	{ id: "cith", event_start: "June 2, 2014", date_length: "1", event_name: "Urban Chicken Coop Tour", event_details: "4th Annual Chicks in the Hood Pittsburgh. Proceeds to benefit the Animal Rescue League", status: "tent"},
	{ id: "cith", event_start: "May 27, 2014", date_length: "1", event_name: "Urban Chicken Coop Tour", event_details: "4th Annual Chicks in the Hood Pittsburgh. Proceeds to benefit the Animal Rescue League", status: "tent"},
	{ id: "tmc", event_start: "May 21, 2014", date_length: "1", event_name: "Women in Prison Defense Committee Meeting" , event_details: "come write letters to our congressmen on behalf of women in prison", status: "pub"},
	{ id: "tmc", event_start: "May 4, 2014", date_length: "1", event_name: "All day RACE: Are We So Different?", event_details: "RACE: Are We So Different? is an interactive multidisciplinary exhibition that encourages visitors to explore the science, history,and everyday impact of race and racism. Themes explored in the exhibition invite discussion about the effect of historical theories on contemporary thought and practice. Additional exhibit components specific to Pittsburgh have been included to enhance the experience for local audiences. The Community Voices Gallery, a collaboration between Carnegie Museum of Art and Carnegie Museum of Natural History, focuses the exhibition's themes on Pittsburgh and the local experience.", status: "pub"},
	{ id: "tmc", event_start: "May 8, 2014", date_length: "1", event_name: "Whiskey and Liberty: When Pennsylvanians Resisted the Nation's First  Bailout", event_details: "Peter Gilmore will speak about the regional, national, and  transatlantic significance of the Whiskey Rebellion in terms of radical  currents and popular resistance. Already, in the 1790s in the U.S., a  popular struggle pitted the well-to-do against those with little or  nothing in a manner that bore some resemblance to the recent 'Occupy'  movement and some resemblance to the 'Tea Party.' Joel Szabadasz will  comment, and a discussion will follow.", status: "tent"},
	{ id: "tmc", event_start: "May 15, 2014", date_length: "1", event_name: "Pete Seeger Tribute Concert", event_details: "Join us as we pay tribute to Pete Seeger and play forward his activist  organizing focus through music and song. All are welcome. Free  admission. Goodwill donation welcome.", status: "tent"},
	{ id: "tmc", event_start: "May 29, 2014", date_length: "1", event_name: "Stop Sexual Assault in the Military", event_details: "Bi-monthly meeting", status: "pub"},
	{ id: "tmc", event_start: "June 4, 2014", date_length: "1", event_name: "Pennsylvanians for Alternatives to the Death Penalty (PADP) meeting", event_details: "Quarterly meeting", status: "pub"},
	{ id: "tmc", event_start: "May 19, 2014", date_length: "1", event_name: "The Urban Green Growth Collaborative", event_details: "The water of 15206 - storm water workshop. As April ends, Spring Thaw  begins. Learn about how Pittsburgh manages storm water and how organizations and residents are seeking to more sustainable solutions.", status: "tent"},
	{ id: "tmc", event_start: "June 4, 2014", date_length: "1", event_name: "Fight for Lifers West meeting", event_details: "An advocacy group for people serving life sentences in Pennsylvania  prisons and provides support for their families. All are welcome.", status: "tent"}
];


var newg_events = [];


//updates on global, probably bad way to do it
function updateCalendar(cal_id, name)
{
	var newCalendar = [];
	var hasElement = false;
	for (element in calendars)
	{
		var curr = calendars[element];	
		if (curr.id == cal_id)
		{
			hasElement = true;
		}
		else
		{
			newCalendar.push(calendars[element]);
		}
		
	}
	
	if (!hasElement)
	{
		newCalendar.push({ id: cal_id, name: name});
	}
	//console.log(
	calendars = newCalendar;
	return hasElement;
}

function getAllDays(start, end) {
    var s = new Date(start);
    s = new Date(s.setDate(
            s.getDate() - 1
        ))
    var e = new Date(end);
    var a = [];

    while(s < e) {
        a.push(s);
        s = new Date(s.setDate(
            s.getDate() + 1
        ))
    }

    return a;
};

function formatDate(date, type) {
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var datestring = date.toDateString();
	var splice = datestring.split(" ");
	if (type == 0)
	{
		//use for headers (Tue 4/1)
		//date = Tue Apr 01 2014
		
		return splice[0] + " " + month + "/" + day;
	}
	if (type == 1)
	{
		var day_string = day.toString();
		//padding day with a 0
		if (day_string.length == 1)
		{
			day_string = "0" + day_string;
		}
		
		var month_string = month.toString();
		if (month_string.length == 1)
		{
			month_string = "0" + month_string;
		}
	
		return month_string + day_string + splice[3];
	}
	if (type == 3)
	{
		return splice[0];
	}
	else
	{
		return splice[1] + " " + day.toString() + ", " + date.getFullYear();
	}

}

function getDiffDays(start_date, end_date) {
	
	var date1 = new Date(start_date);
	var date2 = new Date(end_date);
	
	var timeDiff = Math.abs(date2.getTime() - date1.getTime());
	if (date2 < date1)
	{
		return 0;
	}
	else
	{
	return diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
	}
}

$(document).ready(function () {

    var checkin = $('#start_date').fdatepicker({
    }).on('changeDate', function (ev) {
        if (ev.date.valueOf() > checkout.date.valueOf()) {
            var newDate = new Date(ev.date)
            newDate.setDate(newDate.getDate() + 1);
            checkout.setValue(newDate);
        }
        checkin.hide();
        $('#end_date')[0].focus();
    }).data('datepicker');
    
    var checkout = $('#end_date').fdatepicker({
        onRender: function (date) {
            return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
        }
    }).on('changeDate', function (ev) {
        checkout.hide();
    }).data('datepicker');
    
    


	checkSize();
	$("#date-range").html(formatDate(start_date_obj, 2) + " - " + formatDate(next_date_obj, 2));


	
	$("#event_toggle").on("click", ".button", function () {
		$("#event_toggle .button").removeClass("active");
		$(this).addClass("active");
		$("#event_status").val($(this).attr("id"));
		//console.log(this);	
	})
	
	$("#cancel_event").on("click", function () {
			$("#add_modal").foundation('reveal', 'close');
	});
	
	
	$("#calendar-scroll").niceScroll({scrollspeed: 60,
		mousescrollstep: 35,
		cursorwidth: 10,
		cursorborder: 0,
		cursorcolor: '#ccc',
		cursorborderradius: '3px',
		autohidemode: false,
		horizrailenabled: false,
		smoothscroll: true
		});

});

function setupCalendar(month, day, year)
{
	var start_date = new Date(year, month, day, 0, 0, 0 ,0);
    var string_date = month + "/" + day + "/" + year;
   
	$("#end_date").attr("value", string_date).val(string_date);
    $("#start_date").attr("value", string_date).val(string_date);
}

//init
$(window).resize(checkSize);

function checkSize() {
	var available = $(window).width() - 400;
	var cal_available = $(window).width() - 200;
 	$("#calendar").css({"width" : available + "px" });
 	
 	resizeEvents();
}

function resizeEvents()
{
	 $("#calendar_dates .event-item").each(function () {
			var length = $(this).attr("data-length");  	 
		    var width = $(this).parent("td").outerWidth();
		    var total = (length * width) - 3 + "px";
		    $(this).css("width", total);
	 });
}



//React Modules
var CalendarTable = React.createClass({
	getInitialState: function(){
 		return {data: calendars}
 	},
 	updateState : function () {
	 	this.setState({data: calendars });
	 	
 	},
 	componentDidMount: function () {
 		var that = this;
	 	new mlPushMenu( document.getElementById( 'mp-menu' ), document.getElementById( 'trigger' ) );
	 	
	 	$("#mp-menu .calendar").on("click", function () {
		var cal_id = $(this).attr("data-id");
		var name = $("span", this).html();

		//if calendar exist, remove else add
			var hasElement = updateCalendar(cal_id, name);
			that.updateState();
			$("#refresh").data("update")();
			if (hasElement)
			{
				$(this).removeClass("active");
				$(".fa", this).removeClass("fa-check-square-o").addClass("fa-square-o");
			}
			else
			{
				$(this).addClass("active");
				$(".fa", this).removeClass("fa-square-o").addClass("fa-check-square-o");
			}
		});

	 	
 	},
 	render: function() {
 		console.log(this.state.data);
	 	var list = this.state.data.map(function(d, index) {
	 		var curr = (d.id == 'newg') ? "main" : "second";
			return React.DOM.tr({ className: curr }, React.DOM.td(null, d.name));	
		});
	 	return React.DOM.table( {className:"table", id:"calendar-organizations"}, 
				React.DOM.thead(null, 
					React.DOM.tr(null, 
						React.DOM.th({className: "top-trigger"},
							React.DOM.a({ href: "#", id : "trigger"}, "Calendars", React.DOM.i({ className: "fa fa-plus-square"},""))
					)
				)
				),
				React.DOM.tbody(null,
					list
				)
			)		
	 	
	 	}

});


React.renderComponent(CalendarTable({}), document.getElementById('calendar-left'));

var SetIntervalMixin = {
  componentWillMount: function() {
    this.intervals = [];
  },
  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function() {
    this.intervals.map(clearInterval);
  }
};


var DovetailTable = React.createClass({
	mixins: [SetIntervalMixin], // Use the mixin
	getInitialState: function(){
 		return {
 			start_date: [],
	 		end_date: [],
	 		events: events,
	 		calendars: calendars
	 		
 		}
 	},
 	changeDate: function (start_date, end_date) {
	 	this.setState({start_date: start_date, end_date: end_date });
	 	
 	},
 	updateEvents: function () {
	 	 this.setState({ events: events});
 	},
 	updateCalendars: function () {
	 	this.setState({calendars: calendars});
 	},
 	componentWillMount: function () {
 		this.setState({start_date: start_date, end_date: end_date });

	 	//this.updateEvents();
	 	/* setInterval(this.updateEvents, 2000); */
 	},
	componentDidMount: function(){
		var that = this;
		
		$("#today_period").click(function () {
		    
		    that.changeDate(today_start_date, today_end_date);
		    $("#date-range").html(formatDate(new Date(today_start_date), 2) + " - " + formatDate(new Date(today_end_date), 2));

			
		});
		
		$("#next_period").click(function () {
			var start_date = that.state.end_date;
			//get next 2 weeks
			var next_date = new Date(that.state.end_date);
			var first_date = new Date(next_date.setDate(
		            next_date.getDate() + 1
		        ));
			
			var end_date = new Date(next_date.setDate(
		            next_date.getDate() + 6
		        ));
		    
		    that.changeDate(first_date, end_date.toDateString());
		    $("#date-range").html(formatDate(new Date(first_date), 2) + " - " + formatDate(end_date, 2));
		});
		
		
		$("#prev_period").click(function () {
			//get next 2 s
			var end_date = that.state.start_date;
			
			var next_date = new Date(that.state.start_date);
			
			var end_date = new Date(next_date.setDate(
		            next_date.getDate() - 1
		    ));
			
			var start_date = new Date(next_date.setDate(
		            next_date.getDate() - 6
		    ));
			that.changeDate(start_date.toDateString(), end_date);
			
			$("#date-range").html(formatDate(start_date, 2) + " - " + formatDate(new Date(end_date), 2));
		});
		
		 var dateselect = $("#calendar_period").fdatepicker({
		 }).on('changeDate', function (ev) {
    		//console.log(ev.date.valueOf());
    		//dateselect.hide();
    		var set_date = new Date(ev.date);
    		var start_date = new Date(set_date.setDate(
		            set_date.getDate() + 1
		        ));
    		var end_date = new Date(start_date.setDate(
		            start_date.getDate() + 6
		        ));
		    
		    that.changeDate(set_date.toDateString(), end_date.toDateString());
		    $("#date-range").html(formatDate(set_date, 2) + " - " + formatDate(end_date, 2));
    		
				$("#calendar_period").fdatepicker('hide');
    		
			});
		
		$("#add_event").click(function (e) {
			e.preventDefault();
		$("#add_modal").foundation('reveal', 'close');
		
		//get data from modal
		var cal_id = $("#add_modal").data("id");
		var event_name = $("#event_name_new").val();
		var event_description = $("#event_description").val();
		var start_date = $("#start_date").val();
		var end_date = $("#end_date").val();
		var event_start = formatDate(new Date(start_date), 2);	
		var date_length = getDiffDays(start_date, end_date) + 1;
		var event_status = $("#event_status").val()
		var datemap = formatDate(new Date(start_date), 1);
		var guid = cal_id + datemap;
		
		var new_event = { guid: guid, id : cal_id, event_start: event_start, event_start_format: start_date, event_end_format: end_date,  date_length: date_length, event_name: event_name , event_details: event_description, status : event_status };
		events.push(new_event);
		
		//newg_events[guid] = new_event;
		
		$("#event_name_update").append("<option value='" + guid + "' >" + event_name + "</option>").hide().show();
		
		
	//trigger data update
	//fake the data
			that.updateEvents();
			return false;
		});
		
		$("#remove_event").click(function (e) {
			var guid = $("#add_modal").data("guid");
			var remove_id = -1;
			$.each(events, function(index, event) {
			//console.log(event);
			if (event.guid == guid)
			{
					remove_id = index;
			}
	
			});	
			if (remove_id > -1)
			{
			events.splice(remove_id, 1);	
			}
			//trigger data update
			that.updateEvents();
			$("#add_modal").foundation('reveal', 'close');
			return false;
		});

		
		$("#update_event").click(function (e) {
			e.preventDefault();
		$("#add_modal").foundation('reveal', 'close');
		var guid = $("#add_modal").data("guid");
		//get data from modal
		//var event_name = $("#event_name_new").val();
		var event_description = $("#event_description").val();
		var event_name = $("#event_name_new").val();
		var start_date = $("#start_date").val();
		var end_date = $("#end_date").val();
		var event_start = formatDate(new Date(start_date), 2);	
		var date_length = getDiffDays(start_date, end_date) + 1;
		var event_status = $("#event_status").val()
		var datemap = formatDate(new Date(start_date), 1);
		$.each(events, function(index, event) {
			//console.log(event);
			if (event.guid == guid)
			{
					//console.log("HERE");
					event.event_name = event_name;
					event.event_start = event_start;
					event.event_start_format = start_date;
					event.date_length = date_length;
					event.event_end_format = end_date;
					event.event_details = event_description;
					event.status = event_status;			
			}
	
		});		
		//trigger data update
			that.updateEvents();
			return false;
		});
		
		$("#refresh").data({update : function () { console.log("go"); that.updateCalendars()}});
		
		var self = this;
		
	   oTable = $("#calendar > #calendar_dates").dataTable( {
				"bScrollCollapse" : true,
				"bAutoWidth" : false,
				"bSortClasses": false,
				"bSort": false,
				"bDestroy": true,
				"fnDrawCallback": function() {		  		
            		self.forceUpdate(); 
				}
		});
 		 		
	 	$('td', oTable.fnGetNodes()).hover( function() {
		//console.log("THIS " + $('#calendar_dates td').index(this));
		var iCol = $('#calendar_dates td').index(this) % numCols;
		//console.log(iCol);
		var nTrs = oTable.fnGetNodes();
		$('td:nth-child('+(iCol+1)+')', "#calendar_dates tr").addClass( 'highlighted' );
		$('th:nth-child('+(iCol+1)+')', "#calendar_dates tr").addClass( 'highlighted' );
		
				
	}, function() {
		$('td.highlighted', "#calendar_dates tr").removeClass('highlighted');
		$('th.highlighted', "#calendar_dates tr").removeClass('highlighted');
		
		} );
		
		$.extend( true, $.fn.dataTable.defaults, {
	"sDom": "t",
	"oLanguage": {
		"sLengthMenu": "_MENU_ records per page"
	}
} );


		
 		
		
		var dates = getAllDays(this.state.start_date, this.state.end_date);
		var numCols = dates.length;
		
		$("#calendar_dates .second td").click(function () {
			$('#view_modal').foundation('reveal', 'open');
		
		});

		
		$("#calendar_dates .main td").click(function () {
		
			if ($(".event-listing", this).length > 0) {
				$("#new_event_tab").hide();
				$("#existing_event_tab").hide();
				
				var guid = $(".event-listing", this).attr("data-guid");
				
				$.each(events, function(index, event) {
			//console.log(event);
					if (event.guid == guid)
					{
						//console.log(event.event_name);
						$("#event_title").html("Edit Event");
						//$("#event_name_new").val();
						$("#event_name_new").val(event.event_name);
						//$('#event_name_update option:eq(1)').prop("selected", true);
						$("#event_description").val(event.event_details);
						$("#start_date").val(event.event_start_format);
						$("#end_date").attr("value", event.event_end_format).val(event.event_end_format);
						//console.log($("#end_date").val());
						$("#event_toggle .button").removeClass("active");
						$("#event_status").val(event.status);
						//set tentative or public
						if (event.status == 'pub')
						{
							$("#pub").addClass("active");
						}
						else
						{
							$("#tent").addClass("active");
						}
						
						$("#add_modal").data("guid", guid);
					}
			
				});
				
				// loop thru events
				

				//change to remove instead of cancel
				$("#remove_event").show();
				$("#cancel_event").hide();
				$("#update_event").show();
				$("#add_event").hide();
				
				
				
			} else {
				//new clear stuff
				$("#new_event_tab").show();
				$("#existing_event_tab").show();
				$("#event_title").html("New Event");
				$("#new_event_tab").show();
				$("#event_name_new").val("");
				$("#event_description").val("");
				$("#event_start_time").val("");
				$("#event_end_time").val("");
				$("#event_location").val("");
				$("#new_event_tab").click();
				$("#remove_event").hide();
				$("#cancel_event").show();
				$("#update_event").hide();
				$("#add_event").show();
				
			var date_ref = $(this).attr("id").split("_");
			//console.log(date_ref[1]);
			var calendar_id = date_ref[0];
			var month = date_ref[1].slice(0,2);
			var day = date_ref[1].slice(2,4);
			var year = date_ref[1].slice(4);
				
				//change to cancel instaed of remove
			$("#add_modal").data("id", calendar_id);
			//console.log(curr_date);
			//cal.setDate( curr_date );
			setupCalendar(month , day, year);
			}
		
			$('#add_modal').foundation('reveal', 'open');
			
			
			

		});
			
			   
		resizeEvents();
	   
;
	  

 	},
 	componentDidUpdate: function(){
	 	resizeEvents();
/* 	 	var curr_width = ""; */
/*
	 $(".event-item").hover(function () {
		curr_width = $(this).outerWidth();
		//console.log(curr_width);
		//var max = (curr_width < 400) ? "auto" : "400px";
		$(this).css({"width" : "auto", "min-width" : curr_width + "px" });
		$(this).css({"z-index" : "10" });
	}, function () {
		$(this).css({"width" : curr_width + "px", "min-width" : "0px" });
		$(this).css({"z-index" : "auto"});
	});
*/


 	},
	render: function () {


		var dates = getAllDays(this.state.start_date, this.state.end_date);
		//console.log(dates);
		//console.log(this.state.data);
		var header = dates.map(function(d, index) {
			var currDate = formatDate(d, 0);
			var today = formatDate(new Date(), 0);
			var weekend = formatDate(d, 3);
			var todayClass = (currDate == today) ? "today" : "";
			var weekendClass = (weekend == 'Sun' || weekend == 'Sat') ? 'weekend' : '';
			return React.DOM.th({ className : todayClass + " " + weekendClass }, currDate);			
		});
		
		
		var rows = [];

		//var data = this.state.data;
		
		var eventmap = [];
		//console.log(this.state.events);
		//loop through events and create a map
		$.each(this.state.events, function(index, event) {
			//console.log(event);
			var datemap = formatDate(new Date(event.event_start), 1);
			eventmap[event.id + "_" + datemap] = event;	
			event.guid = event.id + "_" + datemap;
		});
				
		$.each(this.state.calendars, function(index, element) {
			var curr = (element.id == 'newg') ? "main" : "second";
		
			rows.push(React.DOM.tr({ className: curr }, dates.map(function(d, index) {

			if (typeof eventmap[element.id + "_" + formatDate(d, 1)] == 'undefined')
			{
				//does not exist
				var event = "";
			}
			else
			{
					
			
				var curr_event = eventmap[element.id + "_" + formatDate(d, 1)];
				var event = React.DOM.div({ className: "event-listing event-item " + curr_event.status, 
					'data-length' :  curr_event.date_length,
					'data-guid' : curr_event.guid
				}, 
					React.DOM.div({ className: "trigger-click " , href: "#"}, React.DOM.div({ className: "event-title"}, curr_event.event_name), React.DOM.div({ className: "event-details"}, curr_event.event_details)));

			}
			
			//check today
			var currDate = formatDate(d, 1);
			var today = formatDate(new Date(), 1);
			var weekend = formatDate(d, 3);
			var dateClass = (currDate == today) ? "today" : "";
			var weekendClass = (weekend == 'Sun' || weekend == 'Sat') ? 'weekend' : '';
			return React.DOM.td({id: element.id + "_" + currDate, className : dateClass + " " + weekendClass }, event);	
			
		})));	
		});
	
		
		
		return React.DOM.table( {className:"table", id:"calendar_dates"}, 
				React.DOM.thead(null, 
					React.DOM.tr(null, 
						header
					)
				),
				React.DOM.tbody(null,
					rows	
				)
			)		
		}
});

React.renderComponent(DovetailTable({}), document.getElementById('calendar'));