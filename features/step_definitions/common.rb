Given(/I am viewing the app/) do
  visit '/'
end

Then(/I should see "(.*)"/) do |text|
  page.has_content?(text)
end
