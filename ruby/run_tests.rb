
all_test_files = Dir.glob('./test/**/*_test.rb')

test_files = if ARGV.empty?
               all_test_files
             else
               all_test_files.select { |file| ARGV.any? { |arg| file.include?(arg) } }
             end

test_files.each { |file| require file }

ARGV.clear
