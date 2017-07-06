require 'bxm'
require 'optparse'

options = {}

opt_parser = OptionParser.new do |opt|
  opt.banner = "Usage: server COMMAND [OPTIONS]"
  opt.separator  ""
  opt.separator  "Commands"
  opt.separator  "     password: creates english password"
  opt.separator  "     palabras: crea contrasena en espanol"
  opt.separator  "     worts: Erstellt deutsches Passwort"
  opt.separator  ""
  opt.separator  "Options"


  opt.on("-c COMPLEXITY","--complexity COMPLEXITY",Numeric,"which complexity you want to run") do |complexity|
    options[:complexity] = complexity
  end

end

opt_parser.parse!

if options[:complexity] == nil
  @times = 4
else
  @times = options[:complexity].to_i
end

case ARGV[0]
  when "password"
    STDOUT.puts Bxm::Password.rand_key(@times).to_s
  when "palabras"
    STDOUT.puts Bxm::Password.rand_key(@times,"palabras").to_s
  when "worts"
    STDOUT.puts Bxm::Password.rand_key(@times,"worts").to_s
  else
    puts opt_parser
end