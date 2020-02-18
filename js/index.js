'use strict';

window.onload = function() {
	var queryString = window.location.search.slice(1);
	queryString = queryString.split('#')[0];
	var arr = queryString.split('&');
	var REDIRECT_LINK = 'https://rog0n.bemobtrk.com/click/1?ns=c%3Df7587f16-9291-4621-af07-147886d1425e..l%3De04fa333-5e3b-4931-a29e-aa71ccd09d5e..a%3D0..b%3D0';
	document.body.style.overflow = 'unset';
	document.body.style.height = 'unset';
	var quiz = document.querySelector('.quiz-card');
	var quizOffset = quiz.offsetTop - 100;
	var scrollToQuiz = function scrollToQuiz() {
		window.scrollTo(0, quizOffset);
	};

	document.querySelector('.cta-button button').addEventListener('click', scrollToQuiz);
	var progress = document.querySelector('.progress-fill');
	var question = document.querySelector('.question');
	var questionText = document.querySelector('.question-text');
	var questionNumber = document.querySelector('.question-number');
	var answers = document.querySelector('.answers');
	var clickCounter = 0;
	var progressSteps = [10, 25, 40, 55, 70, 85, 100];
	var questions = [
		{
			questionText:
				'Wo das Gewicht gespeichert wird, ist ein direktes Spiegelbild der Leistung bestimmter Fettverlusthormone.\nBeispielsweise verursachen Tomaten bei 67% der Frauen eine Entzündung der Bauchspeicheldrüse, wodurch die Einlagerung von Fett in der Mitte des Körpers erzwungen wird.\n',
			question: 'Welcher der folgenden Punkte trifft am EHESTEN auf Sie zu?',
			answers: [
				'Ich halte das meiste meines zusätzlichen Gewichts in der unteren Hälfte (Gesäß, Hüften und Oberschenkel).',
				'Ich habe eher die Form eines Apfels. Mein Mittelteil und der Bauchbereich sind meine Problemzonen.',
				'Mein zusätzliches Gewicht ist gleichmäßig über meinen Körper verteilt.',
				'Ich habe eher die Form einer Sanduhr, könnte aber immer noch ein paar zusätzliche Pfunde verlieren.'
			]
		},
		{
			questionText:
				'Wann und wie das Gewicht zugenommen wurde, ist ein kritischer Faktor bei der Entscheidung, wie man es wieder verlieren kann.',
			question: 'Welche "Gewichtszunahme-Geschichte" klingt am ehesten zutreffend?',
			answers: [
				'Ich war schon immer ein bisschen schwer und habe mein ganzes Leben lang mit der Gewichtsabnahme gekämpft.',
				"Bis vor kurzem hatte ich keine Probleme mein Gewicht zu kontrollieren.",
				'Ich bemerkte mehr Gewichtszunahme, nachdem ich entweder mit der Geburtenkontrolle oder/und der Behandlung von Depressionen/Angstzuständen begonnen hatte.',
				'Meine Fähigkeit zur Gewichtsabnahme änderte sich nach der Geburt meines ersten Kindes.'
			]
		},
		{
			questionText:
				'Ihre allgemeine Stimmung und wie Sie sich täglich fühlen, zeigt an, wie gut Ihre 3 Schlüsselhormone zur Gewichtsabnahme bei Ihnen wirken.',
			question: 'Welche Antwort beschreibt Ihre allgemeine Stimmung und Energie auf täglicher Basis am besten?',
			answers: [
				'Ich bin im Allgemeinen glücklich und habe den ganzen Tag über beständige Energie.',
				'In den letzten 5-10 Jahren bin ich müder geworden als früher.',
				"Mir geht es gut, aber ich fühle mich einfach irgendwie “daneben” und nicht wie ich selbst.",
				'Ich habe gute (glückliche und energische) Tage gemischt mit schlechten Tagen (Müdigkeit, leichte Depressionen).',
				'Ich verwende Rezepte und/oder rezeptfreie Präparate, um meine Stimmung und Energie zu verbessern.'
			]
		},
		{
			questionText:
				'Die Art und Weise, wie Sie “am besten” oder am effizientesten abnehmen, wird uns helfen, individuelle Anweisungen für Sie zu erstellen.',
			question: 'Welche Methode zur Gewichtsabnahme war in der Vergangenheit für Sie am effektivsten?',
			answers: [
				'Mit einer Diät mit niedrigem Kohlenhydratgehalt verliere ich am schnellsten Gewicht.',
				'Ein rezeptfreies Medikament hat wirklich gut funktioniert.',
				'Kalorienzählung oder Punktzählung haben am meisten geholfen.',
				'Einem Trainings- oder Kardioprogramm zu folgen, ist der beste Weg für mich.'
			]
		},
		{
			questionText:
				'Die häufigste Herausforderung, mit der Sie bei der Gewichtsabnahme konfrontiert sind, wird uns helfen spezifischen Empfehlungen für Sie zu erstellen.',
			question: 'Was ist für Sie die größte Herausforderung beim Abnehmen?',
			answers: [
				'Normalerweise verliere ich am Anfang leicht an Gewicht, aber dann treffe ich fast immer auf ein Plateau.',
				'Ich erlebe intensive Sehnsüchte und/oder Stimmungsschwankungen, während ich Gewicht verliere.',
				'Wenn ich eine Diät mache, fühle ich mich im Allgemeinen müde und habe manchmal Kopfschmerzen und/oder schlechten Schlaf.',
				'Ich verliere sehr langsam an Gewicht, selbst wenn ich eine Diät mache oder ein neues Trainingsprogramm beginne.'
			]
		},
		{
			questionText:
				'Als Frauen haben wir nachweislich eine 72-85% bessere Chance, langfristig Gewicht zu verlieren, wenn wir unserer Quelle vertrauen oder uns mit ihr identifizieren können.',
			question:
				'Welche Aussage beschreibt am besten Ihre bevorzugte Informationsquelle und Anleitung zur Gewichtsabnahme?',
			answers: [
				'Ich glaube, dass die Ärzte die Autorität für Ernährung und Bewegung sein sollten und dass bestimmte Medikamente für eine langfristige Gewichtsabnahme großartig sind.',
				'Die Mainstream-Medien (Blogger, Youtube-Gurus, TV-Ärzte usw.) scheinen die aktuellsten und nützlichsten Informationen über Gewichtsabnahme zu haben.',
				'Ich würde es vorziehen, den Rat einer vertrauenswürdigen Autorität einzuholen, die sich auf frauenspezifische, dauerhafte Gewichtsabnahme und Langlebigkeit spezialisiert hat.',
				'Der effektivste und sicherste Weg, Gewicht zu verlieren, ist es, ein wenig von allem aus verschiedenen Quellen zu probieren.',
				'Ich würde es vorziehen, Anweisungen von jemandem anzunehmen, der eine umfangreiche Erfolgsbilanz mit den modernsten Methoden vorweisen kann.'
			]
		},
		{
			questionText:
				"Je nach Alter gibt es bestimmte Ernährungs- und Bewegungsgrundsätze, die Frauen vermeiden müssen. So sind beispielsweise kohlenhydratarme und kalorienarme Diäten für 18-25 jährige Frauen sehr gut geeignet, können aber unerwünschte gesundheitliche Folgen haben, wenn sie in unseren 30er Jahren und später angewendet werden.",
			question: 'Welche Altersgruppe sind Sie?',
			answers: ['1-29 Jahre alt', '30-40 Jahre alt', '41-59 Jahre alt', '60+ Jahre alt']
		}
	];

	var updateProgress = function updateProgress() {
		progress.style.width = progressSteps[clickCounter] + '%';
		if (clickCounter >= questions.length - 1) showAnalysis();
		else updateQuestion();
	};

	var updateQuestion = function updateQuestion() {
		questionNumber.innerHTML = 'Frage ' + (clickCounter + 1) + ' / ' + questions.length;
		question.innerHTML = questions[clickCounter].question;
		questionText.innerHTML = questions[clickCounter].questionText;
		var answersHTML = '';
		questions[clickCounter].answers.forEach(function(answer) {
			answersHTML += '<div class="radio-answer">' + answer + '</div>';
		});
		answers.innerHTML = answersHTML;
		var allAnswers = document.querySelectorAll('.radio-answer');
		Array.from(allAnswers).forEach(function(el) {
			return el.addEventListener('click', onClick);
		});
		if (clickCounter !== 0) scrollToQuiz();
		if (clickCounter === 1) fbq('track', 'StartedQuiz');
	};

	var showAnalysis = function showAnalysis() {
		answers.style.display = 'none';
		questionNumber.style.display = 'none';
		questionText.style.display = 'none';
		question.innerHTML = 'Analysing your results ...';
		setTimeout(showCongratulations, 3000);
	};

	var showCongratulations = function showCongratulations() {
		document.querySelector('.progress-bar').style.display = 'none';
		var redirectCounter = 0;

		var update = function update() {
			redirectCounter += 1;
			question.innerHTML =
				'Glückwunsch!<br><br><span style="font-size: 0.9em;font-weight:400">Wir haben Ihre Antworten analysiert und sie mit der besten Lösung für Ihre biologischen und persönlichen Prädispositionen abgeglichen.<br><br>Anschließend werden Sie direkt auf die Website weitergeleitet, die Ihre Gewichtsverlustmoleküle aufweckt.<br><br> Umleitung in <b>' +
				(12 - redirectCounter) +
				' </b>Sekunde(n).</span>';

			if (redirectCounter === 12) {
				clearCounterInterval();
				document.location.href = REDIRECT_LINK;
				fbq('track', 'FinishedQuiz');
				console.log('redirecting...');
				question.innerHTML = '<a href="' + REDIRECT_LINK + '">Klicken Sie hier, um jetzt dorthin zu gehen und das Warten überspringen.</a>';
			}
		};

		update();
		var interval = setInterval(update, 1000);

		var clearCounterInterval = function clearCounterInterval() {
			return clearInterval(interval);
		};

		scrollToQuiz();
	};

	var onClick = function onClick() {
		clickCounter += 1;
		updateProgress();
	};

	updateProgress();
};
