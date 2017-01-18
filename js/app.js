$( document ).ready(function() {


	$('#titleltext').keyup(function() {
		BuildAdvert();
	});


});


function BuildAdvert()
{
	let headline = document.getElementById('titleltext')
		if (headline.value.length>0)
	  	{
	  		$('#gtitle1pete').html(headline.value);

	  	}


	  BuildURL();
}

function BuildURL()
{

	var AdText = $('#finalurl').val();

}
