$(document).ready(function(){
    /* On click: Enlarge the font (120%) */
    $('#instructions li:nth-child(1)').click(function() {
      $('body').css('font-size', '120%');
    });

    /* On click: Decrease the font size (80%) */
    $('#instructions li:nth-child(2)').click(function() {
      $('body').css('font-size', '80%');
    });

    /* On click: Bold or normalize the green words */
    $('#instructions li:nth-child(3)').click(function() {
      $('.green').css('font-weight', 'bold');
    });

    /* On click: underline or normalize the words in red */
    $('#instructions li:nth-child(4)').click(function() {
      $('.red').css('text-decoration', 'underline');
    });

    /* On click: Replace the logo with another image */
    $('#instructions li:nth-child(5)').click(function() {
      $('img').attr('src', 'images/koala.jpg');
    });

    /* On hover: Display the URL of links in a tooltip when hovering over links */
    $('content a:nth-child(1)').mouseover(function() {
      $('content a:nth-child(1)').tooltip('https://fr.wikipedia.org/wiki/John_Resig');
    });

    /* On click: add "Chapter 1:" before the 1st title h2 and "Chapter 2:" before the 2nd title h2 */
    $('#instructions li:nth-child(7)').click(function() {

    });
  });
