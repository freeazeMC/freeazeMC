from PyQt5.QtWidgets import QApplication, QMainWindow
from PyQt5.QtWebEngineWidgets import QWebEngineView, QWebEngineProfile
from PyQt5.QtCore import QUrl

class NodeGuardBrowser(QMainWindow):
    def __init__(self):
        super().__init__()
        
        # ANONİMLİK AYARI: Off-the-record profil (Disk kaydı yapmaz)
        self.profile = QWebEngineProfile("NodeGuardProfile", self)
        self.profile.setPersistentStoragePath("") # Diske veri yazma
        self.profile.setHttpCacheType(QWebEngineProfile.NoCache) # Cache tutma
        
        self.browser = QWebEngineView(self.profile)
        self.browser.setUrl(QUrl("https://duckduckgo.com")) # Gizlilik odaklı arama motoru
        self.setCentralWidget(self.browser)
        self.setWindowTitle("NodeGuard Browser - Anonim Mod")

app = QApplication([])
window = NodeGuardBrowser()
window.show()
app.exec_()
