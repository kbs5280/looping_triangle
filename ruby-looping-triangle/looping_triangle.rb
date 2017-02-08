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

  def reverse_triangle(triangle_length)
    marker = 0
    hashtag = ["#"]

    triangle_length.times do
      hashtag.unshift(' ')
    end

    until marker == triangle_length
      puts hashtag.join
      hashtag.shift
      hashtag.push('#')
      marker += 1
    end
  end
end

tri = LoopingTriangle.new
tri.triangle(30)
tri.reverse_triangle(30)
