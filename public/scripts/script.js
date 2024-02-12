// Viewing the blogs

$(document).ready(function() {
  $('[data-blog-target]').click(function() {
    var blog = $($(this).data('blog-target'));
    openblog(blog);
  });

  $('#screen').click(function() {
    $('.blog.active').each(function() {
      closeblog($(this));
    });
  });

  $('[data-close-button]').click(function() {
    var blog = $(this).closest('.blog');
    closeblog(blog);
  });

  function openblog(blog) {
    if (blog == null) return;
    blog.addClass('active');
    $('#screen').addClass('active');
  }

  function closeblog(blog) {
    if (blog == null) return;
    blog.removeClass('active');
    $('#screen').removeClass('active');
  }
});

//Choosing Type / image

$(document).ready(function() {
  $('.lifestyle img').click(function() {
    $('#dropdown').val('option1');
    $('.lifestyle p').addClass('selected')
    $('.instructional p').removeClass('selected')
    $('.review p').removeClass('selected')
  });

  $('.instructional img').click(function() {
    $('#dropdown').val('option2');
    $('.instructional p').addClass('selected')
    $('.lifestyle p').removeClass('selected')
    $('.review p').removeClass('selected')
  });

  $('.review img').click(function() {
    $('#dropdown').val('option3');
    $('.review p').addClass('selected')
    $('.lifestyle p').removeClass('selected')
    $('.instructional p').removeClass('selected')
  });
});
