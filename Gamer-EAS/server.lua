local function stringsplit(inputstr, sep)
	if sep == nil then
		sep = "%s"
	end
	local t={} ; i=1
	for str in string.gmatch(inputstr, "([^"..sep.."]+)") do
		t[i] = str
		i = i + 1
	end
	return t
end

RegisterServerEvent("alert:sv")
AddEventHandler("alert:sv", function (msg, msg2)
	if (isAdmin(source)) then
    		TriggerClientEvent("SendAlert", -1, msg, msg2)
	end
end)

RegisterCommand('alert', function(source, args, rawCommand)
	if IsPlayerAceAllowed(source, "Gamer.EAS") then
		local msg1 = " "
		for i,theArg in pairs(args) do
			if i ~= 1 then
				msg1 = msg1.." "..theArg
			end
		end
		print(msg1)
		TriggerClientEvent("alert:Send", source, msg1 ,args, Config.EAS.Departments)
	end
end) 

AddEventHandler('chatMessage', function(source, name, msg)
	if (isAdmin(source)) then
		local command = stringsplit(msg, " ")[1];

		if command == "/alert" then
		CancelEvent()
		TriggerClientEvent("alert:Send", source, string.sub(msg, 8), Config.EAS.Departments)
		end
	end
end)
