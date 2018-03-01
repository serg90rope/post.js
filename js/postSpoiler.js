$(document).ready(function() {

    // Спойлер. Arguments: spoilerName (string), textArray (array), classesArray (array).
    // Default: 'spoil', ['Показати фото', 'Сховати фото'], ['spoiler-text', 'spoiler-content']		
    postSpoiler(/*'spoil', ['Показати фото', 'Сховати фото'], ['spoiler-text', 'spoiler-content']*/); 	

});

function postSpoiler(className, textArray, classesArray) {
	var className = className || 'spoil',
		classesArray = classesArray && classesArray.length == 2 ? classesArray.split('.').join('') : ['spoiler-text', 'spoiler-content'],
		textArray = textArray && textArray.length == 2 ? textArray : ['Показати фото', 'Сховати фото'];

	classesArray[0] = '.' + classesArray[0];
	classesArray[1] = '.' + classesArray[1];
	className = '.' + className;

	var $spoilerCollection = $(className);

	$spoilerCollection.next(classesArray[1]).hide().end().children(classesArray[1]).text(textArray[0]);

	$spoilerCollection.on('click', function() {
		var $this = $(this),
			isOpen = 1,
			$content = $this.next(classesArray[1]);

		if ($this.hasClass('opened')) {
			isOpen = 0;
		}

		$this.toggleClass('opened').children(classesArray[0]).text(textArray[isOpen]);
		$content.toggle();

	});
}