require 'bxm'
require 'optparse'

options = {}

opt_parser = OptionParser.new do |opt|
  opt.banner = "Usage: server COMMAND [OPTIONS]"
  opt.separator  ""
  opt.separator  "Commands"
  opt.separator  "     words: creates english password"
  opt.separator  "     palabras: crea contrasena en espanol"
  opt.separator  "     worts: Erstellt deutsches Passwort"
  opt.separator  ""
  opt.separator  "Options"


  opt.on("-c COMPLEXITY","--complexity COMPLEXITY",Numeric,"which complexity you want to run") do |complexity|
    options[:complexity] = complexity
  end

  opt.on_tail("-s","--special","If you want special characters") do |specialChar|
    options[:specialChar] = specialChar
  end
end

opt_parser.parse!

if options[:complexity] == nil
  @times = 4
else
  @times = options[:complexity].to_i
end

if options[:specialChar] == nil
  @specialChar = false
else
  @specialChar = true
end


if ARGV[0] == "words" || ARGV[0] == "palabras" || ARGV[0] == "worts"
  STDOUT.puts Bxm::Password.rand_key(@times,ARGV[0],@specialChar).to_s
else
  puts opt_parser
end
