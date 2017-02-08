class LoopingTriangle

  def triangle(triangle_length)
    marker = 0
    hashtag = ["#"]

    until marker == triangle_length
      puts hashtag.join
      hashtag.push("#")
      marker += 1
    end
  end
end

tri = LoopingTriangle.new
tri.triangle(10)
tri.reverse_triangle(10)
