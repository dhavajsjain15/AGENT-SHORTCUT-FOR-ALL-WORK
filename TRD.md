# ⚙️ Technical Requirement Document (TRD) - Agent Shortcut for All Work (FaceTimeOS)

## 1. System Architecture
FaceTimeOS uses a client-server web architecture powered by Node.js, Express, WebSockets (`ws`), and Web APIs for local system shortcuts.

```
+---------------------+     +-----------------------+     +------------------------+
| Client UI Dashboard | <-> | WebSocket Event Hub   | <-> | Task Dispatcher Node   |
| (Browser Frontend)  |     | (ws / Socket.io)      |     | (Background Worker)    |
+---------------------+     +-----------------------+     +------------------------+
                                                                      |
                                                                      v
                                                          +------------------------+
                                                          | OS System Automation   |
                                                          | (Child Processes/APIs) |
                                                          +------------------------+
```

---

## 2. Technical Stack Specifications

- **Frontend**: HTML5, CSS3, JavaScript (ES6+), Web Speech API
- **Backend / Web Server**: Node.js, Express running on `http://localhost:3001`
- **Real-Time Telemetry**: WebSockets (`ws`)
- **System Integration**: Child process execution (`child_process.exec`), REST APIs

---

## 3. Data Protocols & WebSocket Events

### Action Dispatch Packet
```json
{
  "event": "DISPATCH_SHORTCUT",
  "shortcutId": "play_music",
  "payload": { "query": "Lofi Beats" },
  "timestamp": 1774204200
}
```

### Response Telemetry Packet
```json
{
  "event": "ACTION_STATUS",
  "status": "RUNNING",
  "taskId": "task-102",
  "progress": 0.8
}
```
