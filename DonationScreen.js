import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Clipboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';
import Modal from 'react-native-modal';

const DonationScreen = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const handleCopyQRCode = () => {
    // Lógica para copiar o QRCode para a área de transferência
    Clipboard.setString('Texto ou link do QRCode aqui');
    // Exibir o modal personalizado
    setModalVisible(true);
  };

  const closeModal = () => {
    // Fechar o modal
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/logo.jpeg')} style={styles.logo} /> 
      </View>

      <Text style={styles.headerText}>
          Faça sua doação agora e ajude a manter o aplicativo funcionando. Você pode doar qualquer valor a partir de 1 centavo via PIX. Sua doação é segura e transparente.
        </Text>


      <View style={styles.qrCodeContainer}>
        <QRCode value="Texto ou link do QRCode aqui" size={200} />
        <Text style={styles.qrCodeText}>Escaneie o QRCode para doação</Text>
      </View>
      <TouchableOpacity style={styles.copyButton} onPress={handleCopyQRCode}>
        <Text style={styles.copyButtonText}>Copiar QRCode</Text>
      </TouchableOpacity>

      {/* Modal Personalizado */}
      <Modal isVisible={isModalVisible} onBackdropPress={closeModal}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>QRCode copiado para a área de transferência ✔️</Text>
          <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
            <Text style={styles.modalButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  header: {
    backgroundColor: '#FEFCED',
    padding: 5,
    width: '100%',
    alignItems: 'center',
    borderBottomLeftRadius: 100, // Raio da borda inferior esquerda
    borderBottomRightRadius: 100, // Raio da borda inferior direita
    overflow: 'hidden', // Para garantir que a borda arredondada seja aplicada
  },

  logo: {
    width: 150, // Ajuste conforme necessário
    height: 150, // Ajuste conforme necessário
    marginBottom: 20, // Subir um pouco a logo
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', // Centraliza o texto
    marginTop: 10,
  },
  qrCodeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  qrCodeText: {
    marginTop: 10,
    fontSize: 16,
  },
  copyButton: {
    backgroundColor: 'black',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  copyButtonText: {
    color: 'white',
    fontSize: 16,
  },
  // Estilos para o modal
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default DonationScreen;