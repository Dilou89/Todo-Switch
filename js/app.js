$(document).ready(function(){

	$('form').submit(function(event){
		event.preventDefault();
		console.log('send');


		var toDo=[];
		var projet=$("#projet").val();	
		var taches=$("#taches").val();
		var desc=$("#desc").val();
		var statut=$("#suivi:checked").val();
		console.log(statut);


		var objet={
			projet:projet,
			taches:taches,
			desc:desc,
			statut:statut,
		}

		toDo.push(objet);
		console.log(toDo);

		if(statut=="fini"){
			alert("tache finie");
			$('span').append("PROJET : : " + " " + objet.projet + "<br />");

			$('span').append("TACHE : " + " " + objet.taches + "<br />");

			$('span').append("Description : " + " " + objet.desc + "<br />");


			$('span').append(objet.statut + "<br/>");
			
		}
		else{

			$('p').append("PROJET : : " + " " + objet.projet + "<br />");

			$('p').append("TACHE : " + " " + objet.taches + "<br />");

			$('p').append("Description : " + " " + objet.desc + "<br />");


			$('p').append(objet.statut + "<br/>");
		}	

	});

	$("#ign").click(function(span){
		
		$('span').hide();
	})
	$("#show").click(function(span){
		
		$('span').show();
	})
	$("#supp").click(function(span){
		alert("vous allez supprimer les taches finies")
		$('span').empty();
	});
});

