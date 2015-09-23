var drawTable = function(n){
	
	var table = $('<table width="200px" border="1"></table>')
	
	for(var i = 0; i<n;i++)
	{
		var row = createRow()
				
		for(var j = 0; j<n;j++)
		{
			row.append(createCell('?'))
			
		};
		table.append(row);
		
		
	};
	$('body').text('');
	$('body').append(table);
	shot();
	ligth();
	
};

var createRow = function(){
	var row = $('<tr></tr>');
	return row;
};

var createCell = function(text){
	var cell = $('<td>'+text+'</td>');
	return cell;
};

var attachListeners = function(){
	$('td').on('click',function(){
     console.log('First cell clicked!',event.target);
	});
};
var shot = function(){
	
	$('td').on('click',function(){
		console.log('First cell clicked!',event.target);
		$(this).text('X');
		$(this).css('background-color', 'green');
		$(this).off('click');
		$(this).off();
	});
	
	
};

var ligth = function(){
	$('td').on('mouseover',function(){
		$(this).css('background-color', 'red');
	});
	$('td').on('mouseout',function(){	
		$(this).css('background-color', 'yellow');
	});
	

};

