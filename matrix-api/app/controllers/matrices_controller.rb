# app/controllers/matrices_controller.rb
class MatricesController < ApplicationController
    def multiply
      matrixA = params[:matrixA]
      matrixB = params[:matrixB]
  
      result = multiply_matrices(matrixA, matrixB)
      render json: { result: result }
    end
  
    private
  
    def multiply_matrices(a, b)
      rows_a = a.length
      cols_a = a[0].length
      rows_b = b.length
      cols_b = b[0].length
  
      return { error: "Invalid matrix sizes" } if cols_a != rows_b
  
      result = Array.new(rows_a) { Array.new(cols_b, 0) }
      (0...rows_a).each do |i|
        (0...cols_b).each do |j|
          (0...cols_a).each do |k|
            result[i][j] += a[i][k] * b[k][j]
          end
        end
      end
      result
    end
  end
  