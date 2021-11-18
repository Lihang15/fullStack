服务端生成页面 会有转发和重定向
区别：转发：从一个域(servlet)，转到另一个域(servlet)（可以拿到上一个域带过来的参数），浏览器url不会变，实际只发生一次请求 （适用增删改）
      request.getRequestDispatcher("/地址").forward(request, response);


      重定向：从一个域，转到另一个域（不可以拿到上一个域带过来的参数），浏览器url会变成第二个域的url，发生两次请求（适用查询）
      response.sendRedirect("/地址")