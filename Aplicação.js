$(document).ready(function() {

$("h1").hide();
$("#layout-content").hide();
$("#__btnRule12336").hide();

    var params = "frm=frmOmniAtiveMassiveList";
    params += SP.addParam("rle","omniAtiveMassiveList.PreLoad");
    params += SP.addParam("_v_valuesJson", "");

	SPAjax.fillParams({
	    url: SP.context + "/Engine.form?" + params,
	    showMsg: true,
	    evalScript: true,
	    callback: function (data) {

	    	var tmp = $("<div />");
	        tmp.html(data);
	        const values = tmp.find("#_v_OAMList_valuesJson").val();
 
			if(values.length > 0) {
				var json = JSON.parse(values);
				if(json != null && json.length > 0) {
					var html = new StringBuilder();
					html.append("<table cellspacing=\"10\" > ");
					var sentPercent = 0;
					var remainingPercent = 0;
					for(var i = 0; i < json.length; i++) {
						if(json[i].totalDbm != '0'){
							sentPercent = json[i].totalResult * 100 / json[i].totalDbm;
							if(sentPercent != '100' && sentPercent != '0'){
								sentPercent = sentPercent.toFixed(1);
							}
							remainingPercent = json[i].remainingMsg * 100 / json[i].totalDbm;
							if(remainingPercent != '100' && remainingPercent != '0'){
								remainingPercent = remainingPercent.toFixed(1);
							}
						}
						else if(json[i].totalDbm == '0'){
							sentPercent = 100;
							remainingPercent = 100; 
						}

						html.append("	<tr> ");
						html.append("		<td class=\"td-info\"> ");
						html.append("			<div class=\"title-message\" values=\""+json[i].idActive+"\" onclick=\"openSpecificMassiveMessage(").append(json[i].idActive).append(")\">").append(json[i].nmOmniAction).append("</div> ");
						html.append("			<label class=\"label-info-11\">Data de Envio: ").append(json[i].dtCreated).append("</label><br /> ");		
						html.append("			<label class=\"label-info-11\">Status: ").append(json[i].nmStatus).append("</label><br /> ");	
						html.append("			<label class=\"label-info-11\">Colaborador: ").append(json[i].nmEmployee).append("</label><br /><br />");
						html.append("			<label class=\"label-info-11\">Segmentação: </label><br />");
						html.append("			<label class=\"label-info-10\">●  ").append(json[i].nmSegment).append("</label><br />");
						html.append("		</td> ");

						html.append("		<td align=\"center\" class=\"td-box-total\"> ");
						html.append("			<label class=\"label-box-25\">").append(json[i].totalDbm).append("</label><br /> ");
						html.append("			<label class=\"label-box-13\" onclick=\"openContacts(").append(json[i].idActive).append(",3)\">(100%)</label><br /> ");
						html.append("			<label class=\"label-box-12\"><strong>Total</strong></label><br /> ");
						html.append("		</td> ");

						html.append("		<td align=\"center\" class=\"td-box-sent\"> ");
						html.append("			<label class=\"label-box-25\">").append(json[i].totalResult).append("</label><br /> ");
						html.append("			<label class=\"label-box-13\" onclick=\"openContacts(").append(json[i].idActive).append(",2)\">(").append(sentPercent).append("%)</label><br /> ");
						html.append("			<label class=\"label-box-12\"><strong>Enviadas</strong></label><br /> ");
						html.append("		</td> ");

						html.append("		<td align=\"center\" class=\"td-box-ready\"> ");
						html.append("			<label class=\"label-box-25\">").append(json[i].remainingMsg).append("</label><br /> ");
						html.append("			<label class=\"label-box-13\" onclick=\"openContacts(").append(json[i].idActive).append(",1)\">(").append(remainingPercent).append("%)</label><br /> ");
						html.append("			<label class=\"label-box-12\"><strong>Restantes</strong></label><br /> ");
						html.append("		</td> ");

						html.append("		<td align=\"center\" class=\"td-box-read\"> ");
						html.append("			<table> ");
						html.append("				<tr> ");
						html.append("					<td colspan=\"2\"> ");
						html.append("						<label style=\"font-size: 16pt;color: #868686;\" class=\"title-status\">Tabulação dos Contatos</label> ");
						html.append("					</td> ");
						html.append("				</tr> ");
						html.append("				<tr> ");
						html.append("					<td colspan=\"2\"> </td> ");
						html.append("				</tr> ");
						html.append("				<tr> ");
						html.append("					<td> ");
						html.append("						<label class=\"label-info-11\">Contatos sem Celular:</label>");
						html.append("					</td> ");
						html.append("					<td> ");
						html.append("						<label class=\"label-info-11-link\" onclick=\"openContacts(").append(json[i].idActive).append(",4)\">" + json[i].statusOne + "</label>");
						html.append("					</td> ");
						html.append("				</tr> ");
						html.append("				<tr> ");
						html.append("					<td> ");
						html.append("						<label class=\"label-info-11\">Contatos com Celular Inválido:</label>");
						html.append("					</td> ");
						html.append("					<td> ");
						html.append("						<label class=\"label-info-11-link\" onclick=\"openContacts(").append(json[i].idActive).append(",5)\">" + json[i].statusTwo + "</label>");
						html.append("					</td> ");
						html.append("				</tr> ");
						html.append("				<tr> ");
						html.append("					<td> ");
						html.append("						<label class=\"label-info-11\">Contatos com Problemas no DDD:</label>");
						html.append("					</td> ");
						html.append("					<td> ");``
						html.append("						<label class=\"label-info-11-link\" onclick=\"openContacts(").append(json[i].idActive).append(",6)\">" + json[i].statusThree + "</label>");
						html.append("					</td> ");
						html.append("				</tr> ");
						html.append("				<tr> ");
						html.append("					<td> ");
						html.append("						<label class=\"label-info-11\">Contatos com Celular Duplicado:</label>");
						html.append("					</td> ");
						html.append("					<td> ");
						html.append("						<label class=\"label-info-11-link\" onclick=\"openContacts(").append(json[i].idActive).append(",7)\">" + json[i].statusFour + "</label>");
						html.append("					</td> ");
						html.append("				</tr> ");
						html.append("				<tr> ");
						html.append("					<td> ");
						html.append("						<label class=\"label-info-11\">Contatos Marcados como Opt-out:</label>");
						html.append("					</td> ");
						html.append("					<td> ");
						html.append("						<label class=\"label-info-11-link\" onclick=\"openContacts(").append(json[i].idActive).append(",8)\">" + json[i].statusFive + "</label>");
						html.append("					</td> ");
						html.append("				</tr> ");
						html.append("				<tr> ");
						html.append("					<td> ");
						html.append("						<label class=\"label-info-11\">Contatos sem Opt-in e não Marcados como Opt-out:</label>");
						html.append("					</td> ");
						html.append("					<td> ");
						html.append("						<label class=\"label-info-11-link\" onclick=\"openContacts(").append(json[i].idActive).append(",9)\">" + json[i].statusSix + "</label>");
						html.append("					</td> ");
						html.append("				</tr> ");
						html.append("				<tr> ");
						html.append("					<td> ");
						html.append("						<label class=\"label-info-11\">Contatos Aptos a Receber a Mensagem:</label>");
						html.append("					</td> ");
						html.append("					<td> ");
						html.append("						<label class=\"label-info-11-link\" onclick=\"openContacts(").append(json[i].idActive).append(",3)\">" + json[i].statusSeven + "</label>");
						html.append("					</td> ");
						html.append("				</tr> ");
						html.append("			</table> ");
						html.append("		</td> ");

						html.append("		<td align=\"center\" class=\"td-box-status-pending\"> ");
						html.append("			<table> ");
						html.append("				<tr> ");
						html.append("					<td align=\"center\"> ");
						html.append("						<label style=\"font-size: 16pt;color: #868686;\">Resultados</label> ");
						html.append("					</td> ");
						html.append("				</tr> ");
						html.append("				<tr> ");
						html.append("					<td> </td> ");
						html.append("				</tr> ");
						html.append("			</table> ");
						html.append("		</td> ");
						
						html.append("	</tr> ");
					}
					html.append("</table> ");

					$("#layout-content").append(html.toString());
				}
				else {
					$("#layout-content").append("<label class=\"label-content-14\">Não existem Campanhas de Mensagens Ativas em Massa Cadastradas.</label>");
				}
			}
			else {
				$("#layout-content").append("<label class=\"label-content-14\">Não existem Campanhas de Mensagens Ativas em Massa Cadastradas.</label>");
			}
			addStyle();
			$("#__btnRule12336").css("margin-left","10px")
			$("#__btnRule12336").css("margin-bottom","10px")
			$("#__btnRule12336").css("margin-top","10px")
			$("#__btnRule12336").css("width","75px")
			$("#__btnRule12336").css("height","22px")
			$("#__btnRule12336").attr("type", "button");
			$("h1").show();
			$("#layout-content").show();
			$("#__btnRule12336").show();
		}
	})
});

function addStyle() {
		$("#layout-content").css({
			backgroundColor: "#FFFFFF"
		});

		$(".td-info").css({
			width: "240px",
			height: "100px"
		});

		$(".title-message").css({
			fontSize: "14pt",
			width: "100%",
			color: "#288DE2"
			//textDecoration: "underline",
			//cursor: "pointer"
		});

		$(".label-info-11").css({
			fontSize: "11pt",
			color: "#868686"
		});
		
		$(".label-info-11-link").css({
			fontSize: "11pt",
			color: "#288DE2",
			marginLeft: "10px",
			textDecoration: "underline",
			cursor: "pointer"
		});

		$(".label-info-10").css({
			fontSize: "10pt",
			color: "#868686"
		});

		$(".td-box-total").css({
			width: "110px",
			height: "180px",
			border: "1px solid #BDBDBD",
			borderBottom: "2px solid #2196F3"
		});

		$(".td-box-sent").css({
			width: "110px",
			height: "180px",
			border: "1px solid #BDBDBD",
			borderBottom: "2px solid #4CAF50"
		});

		$(".td-box-ready").css({
			width: "110px",
			height: "180px",
			border: "1px solid #BDBDBD",
			borderBottom: "2px solid #F44336"
		});

		$(".td-box-read").css({
			width: "400px",
			height: "180px",
			border: "1px solid #BDBDBD",
			borderBottom: "2px solid #BDBDBD"
		});

		$(".td-box-status-pending").css({
			width: "260px",
			height: "180px",
			border: "1px solid #BDBDBD",
			borderBottom: "2px solid #FFEB3B"
		});

		$(".td-box-status-send").css({
			width: "170px",
			height: "100px",
			border: "1px solid #BDBDBD",
			borderBottom: "2px solid #4CAF50"
		});

		$(".label-box-12").css({
			fontSize: "12pt",
			color: "#868686"
		});

		$(".label-box-13").css({
			fontSize: "13pt",
			color: "#868686",
			color: "#288DE2",
			textDecoration: "underline",
			cursor: "pointer"
		});

		$(".label-box-14").css({
			fontSize: "14pt",
			color: "#868686"
		});

		$(".label-box-25").css({
			fontSize: "25pt",
			color: "#868686"
		});
		$(".button-create").css({
			backgroundColor: "#288DE2",
			color: "#FFFFFF",
			height: "19px",
			width: "125px",
			backgroundImage: "none",
			border: "0px"
		});

		$(".td-h1").css({
			width: "100%"
		});

		$("h1").css({
			marginLeft: "30%",
			fontSize: "16pt",
			color: "#868686"
		});
		$(".title-status").css({
			marginLeft: "22%"
		});
		$(".label-content-14").css({
			fontSize: "14pt"
		});
}

function openSpecificMassiveMessage(id) {
	//window.location.href = SP.context + "/Telemarketing.do?command=prepareTelemarketingStatistics&actionVO.id=" + id;
	console.log(id);
}

function openContacts(idActive,flStatus) {
	console.log("idActive: " + idActive);
	console.log("flStatus: " + flStatus);
	var params = "frm=frmOmniContactList&rle=OmniContactList.Search&isPopUp=true&_v_Status=" + flStatus + "&_v_idActive=" + idActive;

	openModal(SP.context + "/Engine.form?" + 
		params, "modal = yes, dialog = yes, top=241px, left=600px, width=680px, height=560px, scrollbars = yes, status = no, dependent = yes,resizable = yes", "winConList");
}