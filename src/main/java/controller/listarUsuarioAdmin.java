/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import model.usuarioadminDAO;
import model.usuarioadminModel;

/**
 *
 * @author eduar
 */
@WebServlet("/listarUsuarioAdmin")
public class listarUsuarioAdmin extends HttpServlet {

    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        usuarioadminDAO usuarioDAO = new usuarioadminDAO();
        List<usuarioadminModel> usuarios = usuarioDAO.todosLosUsuarios();

        request.setAttribute("usuarios", usuarios);
        request.getRequestDispatcher("/Sadmin/administracion.jsp").forward(request, response);
    }
}



