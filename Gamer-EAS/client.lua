RegisterNetEvent("SendAlert")
AddEventHandler("SendAlert", function(msg, msg2)
    SendNUIMessage({
        type    = "alert",
        enable  = true,
        issuer  = msg,
        message = msg2,
        volume  = Config.EAS.Volume,
        timer = Config.EAS.Time
    })
end)

RegisterNetEvent("alert:Send")
AddEventHandler("alert:Send", function(msg, args, departments)
    local departments1 = args[1]
    
    for i, v in pairs(departments) do
        if departments1 == i then
            depname = departments[i].name
            TriggerServerEvent("alert:sv", depname, msg)
            TriggerEvent("SendAlert", depname, msg)
        end
    end

    


end)
